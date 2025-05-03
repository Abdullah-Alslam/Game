// utils/firebaseErrors.js
export function handleFirebaseError(code) {
    switch (code) {
      case "auth/email-already-in-use":
        return "This email address is already in use ❗";
      case "auth/invalid-email":
        return "Please enter a valid email address ✉️";
      case "auth/weak-password":
        return "Your password is too weak. It should be at least 6 characters 🔐";
      case "auth/missing-password":
        return "Please enter your password 🔐";
      case "auth/user-not-found":
        return "No account found with this email address ❌";
      case "auth/wrong-password":
        return "The password you entered is incorrect ❌";
      case "auth/too-many-requests":
        return "This account has been temporarily disabled due to many failed login attempts. Please try again later ⏳";
      default:
        return "An unexpected error occurred. Please try again ⚠️";
    }
  }
  