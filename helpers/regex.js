
const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const validatePassword = (password) => {
    // Password regex: At least one uppercase letter, one lowercase letter, one digit, one special character, and a minimum of 8 characters
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
};

const validateWalletAddress=(walletAddress)=>{
    const walletAddressRegex=/^(0x[a-fA-F0-9]{40}|[1-9A-HJ-NP-Za-km-z]{32,44})$/;
    return walletAddressRegex.test(walletAddress);
}

module.exports={validateEmail,validatePassword,validateWalletAddress};