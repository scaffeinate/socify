class SessionHelper {
  static isCurrentUser({ user }) {
    const currentUser = {}; // TODO: Fetch it from the store
    return currentUser.id === user.id;
  }

  static userSignedIn() {
    const currentUser = {}; // TODO: Fetch it from the store
    return currentUser !== null;
  }
}
export default SessionHelper;
