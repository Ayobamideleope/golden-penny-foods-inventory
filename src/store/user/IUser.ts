import { Timestamp } from "@firebase/firestore-types";

interface User {
  auth: Auth,
  authData: AuthData
  data: UserData,
  settings: UserSettings
}

interface Auth {
  idToken: 'number',
  refreshToken: 'number',
  expiresIn: 'Timestamp',
}

interface AuthData {
  localId: string,
  email: string,
  emailVerified: boolean,
  displayName: string,
  phoneNumber: number,
  photoURL: string ,
  validSince: Timestamp
}

interface UserData {
  username: string,
  firstName: String,
  lastName: String,
  otherNames: String[],
  birthday: string,
  showBirthdayYear: boolean,
  emailAddresses: String[],
  phoneNumbers: Array<number>,
  schools: Array<School>,
  nyscCallUpNumber: String,
  nyscState: States,
  nyscYear: String,
  nyscBatch: String,
  employments: Array<Employment>,
  coverImageURL: String
}

enum States {
  'FCT',
  'Kwara',
  'Oyo',
}

interface School {
  name: String,
  startDate: Timestamp,
  endDate: Timestamp,
  courseCategory: String,
  courseName: String,
}

interface Employment {
  employer: String,
  position: String,
  startDate: Timestamp,
  endDate: Timestamp,
  responsibilities ?: String,
}

interface UserSettings {}
