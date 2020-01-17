export default () => ({
  appDrawer: {
    isEnabled: true,
    isTemporary: false,
    isMiniVariantEnabled: false,
    isMiniVariant: false,
    isPermanent: true,
    isShown: null
  },

  appDrawerDisabled: {
    isEnabled: false,
    isTemporary: true,
    isPermanent: true,
    isShown: null
  },

  appDrawerMiniPersistent: {
    // isEnabled: true, Mutation sets it by default
    isTemporary: false,
    isMiniVariantEnabled: true,
    isMiniVariant: true,
    isPermanent: true,
    isShown: true
  },

  appDrawerFullPersistent: {
    // isEnabled: true, Mutation sets it by default
    isTemporary: false,
    isPermanent: true,
    isShown: true
  },

  appDrawerFullTemporary: {
    // isEnabled: true, Mutation sets it by default
    isTemporary: true,
    isPermanent: false,
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
