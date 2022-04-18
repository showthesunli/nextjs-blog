import { MongoClient } from "mongodb"

const DB_HOST = process.env.DB_HOST
const DB_PORT = process.env.DB_PORT

class DbManager {
  static dm = undefined

  constructor(host, port, user, password) {
    this._host = host;
    this._port = port;
    this._user = user;
    this._password = password;
  }

  get host() {
    return this._host;
  }

  get port() {
    return this._port;
  }

  get user() {
    return this._user;
  }

  get password() {
    return this._password
  }

  get dbUri() {
    return !this.user ? `mongodb://${this.host}:${this.port}` : `mongodb://${this.user}:${this.password}@${this.host}:${this.port}`
  }

  static getDbManger() {
    if (this.dm) {
      return this.dm;
    } else {
      const DB_HOST = process.env.DB_HOST
      const DB_PORT = process.env.DB_PORT
      const DB_USER = process.env.DB_USER
      const DB_PASSWORd = process.env.DB_PASSWORD
      this.dm = new this(DB_HOST, DB_PORT, DB_USER, DB_PASSWORd);
      console.log(this.dm.dbUri)
      const client = new MongoClient(this.dm.dbUri);
      this.dm.client = client;
      this.dm.client.connect();
      return this.dm;
    }
  }
}

export const dm = DbManager.getDbManger()
