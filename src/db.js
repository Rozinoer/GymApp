import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("client.db");

export class DB {
  static init() {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "create table if not exists clients (id integer primary key not null, name text, surname text);",
          [],
          resolve(),
          (_, error) => reject(error)
        );
      });
      db.transaction((tx) => {
        tx.executeSql(
          "create table if not exists ex (id integer primary key not null, name text, weight text, approaches text, repetitions text, rest text, clientID integer, foreign key (clientID) references clients (id));",
          [],
          resolve(),
          (_, error) => reject(error)
        );
      });
    });
  }

  static getEx(id) {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "select * from ex where clientID = ?",
          [id],
          (_, result) => resolve(result.rows._array),
          (_, error) => reject(error)
        );
      });
    });
  }

  static getClients() {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "select * from clients",
          [],
          (_, result) => resolve(result.rows._array),
          (_, error) => reject(error)
        );
      });
    });
  }

  static createClient({ name, surname }) {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "insert into clients (name, surname) values (?, ?)",
          [name, surname],
          (_, result) => resolve(result.insertId),
          (_, error) => reject(error)
        );
      });
    });
  }

  static createEx({ name, clientID, weight, approaches, repetitions, rest }) {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "insert into ex (name, weight, approaches, repetitions, rest, clientID) values (?, ?, ?, ?, ?, ?)",
          [name, weight, approaches, repetitions, rest, clientID],
          (_, result) => resolve(result.insertId),
          (_, error) => reject(error)
        );
      });
    });
  }

  static delete() {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql("drop table clients", [], resolve(), (_, error) =>
          reject(error)
        );
      });
      db.transaction((tx) => {
        tx.executeSql("drop table ex", [], resolve(), (_, error) =>
          reject(error)
        );
      });
    });
  }
}
