import storage from "firebase/storage";
import app from "firebase/app";
import auth from "firebase/auth";
import database from "firebase/firestore";
import functions from "firebase/functions";

const loadFirebaseDependencies = Promise.all([
  app,
  auth,
  database,
  functions,
  storage,
]).then(values => {
  return values[0];
});

export default loadFirebaseDependencies;
