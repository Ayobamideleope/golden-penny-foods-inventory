export default () => ({
  appDrawer: {
    isEnabled: true,
    isTemporary: true,
    isMiniVariantEnabled: false,
    isMiniVariant: false,
    isShown: null
  },

  appDrawerDisabled: {
    isEnabled: false,
    isTemporary: true,
    isPersistent: true,
    isShown: null
  },

  appDrawerMiniPersistent: {
    // isEnabled: true, Mutation sets it by default
    isTemporary: false,
    isMiniVariantEnabled: true,
    isMiniVariant: true,
    isPersistent: true,
    isShown: true
  },

  appDrawerFullPersistent: {
    // isEnabled: true, Mutation sets it by default
    isTemporary: false,
    isPersistent: true,
    isShown: true
  },

  // Snackbar
  snackbar: {
    show: false,
    color: '',
    text: '',
    textColor: '',
    closable: true,
    closeBtnTextColor: '',
    closeBtnColor: '',
    timeout: 0
  }
});
