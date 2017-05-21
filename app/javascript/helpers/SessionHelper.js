class SessionHelper {
  static isCurrentUser({ user }) {
    const currentUser = {}; // TODO: Fetch it from the store
    return true;
    // return currentUser.id === user.id;
  }

  static userSignedIn() {
    const currentUser = {}; // TODO: Fetch it from the store
    return currentUser !== null;
  }

  static isUserPage() {
    return false;
  }
}
export default SessionHelper;
