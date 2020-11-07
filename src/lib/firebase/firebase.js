import firebaseConfig from './config';
class Firebase {
  constructor(app) {
    if (!firebaseInstance) {
      app.initializeApp(firebaseConfig);

      this.auth = app.auth();
      this.db = app.firestore();
      this.functions = app.functions();
      this.storage = app.storage();
    }
  }

  async register({ email, password }) {
    let cred;
    try {
      cred = await this.auth.createUserWithEmailAndPassword(email, password);
    } catch (err) {
      console.error('Ehy, probably you are already registered!', err);
      throw err;
    }
    return cred;
  }

  async login({ email, password }) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  async logout() {
    await this.auth.signOut();
  }

  async updateProfile({ email, firstName, lastName, skype }) {
    let user = this.auth.currentUser;
    let uid = user.uid;
    const firestoreDB = this.db;

    user
      .updateEmail(email)
      .then(function () {
        updateCollection();
      })
      .catch(function (error) {
        console.error('Error updating email', error);
      });

    const updateCollection = async () => {
      const docRef = await firestoreDB.collection('users').doc(user.uid);
      return docRef
        .update({
          uid,
          email,
          firstName,
          lastName,
          skype,
        })
        .then(function () {
          console.log('Document successfully updated!');
        })
        .catch(function (error) {
          // The document probably doesn't exist.
          console.error('Error updating document: ', error);
        });
    };
  }

  async updatePassword(newPassword) {
    let user = this.auth.currentUser;

    user
      .updatePassword(newPassword)
      .then(function () {
        console.log('Password Updated.');
      })
      .catch(function (error) {
        console.error('An error happened updating password.', error);
      });
  }

  async getUserState() {
    return this.auth.currentUser;
  }

  async getUser(uid) {
    return this.db
      .collection('users')
      .doc(uid)
      .get()
      .then((doc) => doc.data());
  }
}

let firebaseInstance;

function getFirebaseInstance(app) {
  if (!firebaseInstance && app) {
    firebaseInstance = new Firebase(app);
    return firebaseInstance;
  } else if (firebaseInstance) {
    return firebaseInstance;
  } else {
    return null;
  }
}

export default getFirebaseInstance;
