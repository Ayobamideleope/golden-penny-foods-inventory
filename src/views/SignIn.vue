<template>
  <div class="vi-sign-in-page">
    <auth-layout>
      <p class="title text--secondary mb-0">Welcome Back!</p>

      <h2 class="display-1 mb-10 primary--text text--darken-2">Sign In</h2>

      <v-alert
        :value="!!errorResponse"
        text
        dense
        color="error"
        class="red lighten-5 mb-3"
        outlined
        transition="slide-y-reverse-transition"
        v-text="errorResponseMessage"
      />

      <v-form v-model="formIsValid" @submit.prevent="signIn">
        <!-- v-text-field email -->
        <v-text-field
          v-model="form.email"
          :rules="formRules.email"
          name="email"
          class="form__email"
          label="Email"
          type="email"
          outlined
          required
        />

        <!-- v-text-field password -->
        <v-text-field
          v-model="form.password"
          :type="showPassword ? 'text' : 'password'"
          :append-icon="showPassword ? mdiEyeOff : mdiEye"
          :rules="formRules.password"
          name="password"
          class="form__password"
          label="Password"
          outlined
          required
          @click:append="showPassword = !showPassword"
        />

        <a class="mt-3 mb-6 d-inline-block primary--text text--darken-2">
          Forgot your password?
        </a>

        <div class="d-flex justify-center mt-">
          <v-btn
            :loading="formIsProcessing"
            large
            color="secondary"
            class="mt-2 mx-auto"
            type="submit"
            >Sign In</v-btn
          >
        </div>
      </v-form>
    </auth-layout>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { mdiEye, mdiEyeOff } from '@mdi/js';

import AuthLayout from '@/components/layout/AuthLayout.vue';

@Component({
  components: {
    AuthLayout
  }
})
export default class SignInPage extends Vue {
  isLoginWithEmail = false;

  showPassword = false;

  showConfirmPassword = false;

  form = {
    email: '',
    password: '',
    confirmPassword: ''
  };

  formIsValid = false;

  formRules = {
    email: [
      value => this.isFieldEmpty(value, 'Email'),
      value => this.isFieldLengthy(value, 100, 'Email'),
      value => /.+@.+/.test(value) || 'Type a valid email address'
    ],
    password: [
      value => this.isFieldEmpty(value, 'Password'),
      value => /(.*[a-z])/.test(value) || 'Must contain at least a lower case',
      value => /(.*[A-Z])/.test(value) || 'Must contain at least a upper case',
      value => /(.*[0-9])/.test(value) || 'Must contain at least a number',
      // value =>
      //   /(.*[-_+!@#$%^&*])/.test(value) ||
      //   "Must contain at least a special character like -_+!@#$%^&*",
      value => value.length >= 6 || `Password must be at least 6 characters`,
      value => this.isFieldLengthy(value, 16, 'Password')
    ],
    confirmPassword: [
      value => value === this.form.password || 'Passwords do not match'
    ]
  };

  formIsProcessing = false;

  errorResponse = '';

  mdiEye = mdiEye;

  mdiEyeOff = mdiEyeOff;

  get errorResponseMessage() {
    // TODO: Refactor to switch and to a function
    // which uses loop to check and return error messages
    if (this.errorResponse === 'INCORRECT LOGIN DETAILS') {
      return 'Email or Password is incorrect!';
    } else if (this.errorResponse === 'auth/network-request-failed') {
      return 'Network error! Please check your connection it might be unstable/lost!';
    } else if (this.errorResponse === 'auth/email-already-in-use') {
      return 'Email already exists!';
    } else if (this.errorResponse === 'auth/invalid-email') {
      return 'Please enter a valid Email address.';
    } else if (this.errorResponse === 'auth/weak-password') {
      return 'Your password is not weak.';
    } else if (
      this.errorResponse === 'auth/account-exists-with-different-credential'
    ) {
      return 'An account with the same email address already exists. Please use your former/another way of logging in.';
    } else if (this.errorResponse) {
      return 'An error occurred! Please refresh the page or try again later.';
    } else {
      return '';
    }
  }

  signIn() {
    if (!this.formIsValid || this.formIsProcessing) return;

    // eslint-disable-next-line no-console
    console.log('Sign up called');

    this.formIsProcessing = true;
    this.errorResponse = '';

    setTimeout(() => {
      this.formIsProcessing = false;

      if (
        this.form.email === 'admin@gpf.com' &&
        this.form.password === 'Admin6'
      ) {
        this.$router.push('dashboard');
      } else {
        this.errorResponse = 'INCORRECT LOGIN DETAILS';
      }
    }, 3000);

    // auth
    //   .createUserWithEmailAndPassword(this.form.email, this.form.password)
    //   .then(result => {
    //     this.formIsProcessing = false;

    //     // eslint-disable-next-line no-console
    //     console.log('sign up is successful', result);

    //     this.onLoginCompleted(result.user);
    //   })
    //   .catch(error => {
    //     this.formIsProcessing = false;
    //     // eslint-disable-next-line no-console
    //     console.log(error);
    //     this.errorResponse = error.code;
    //   });
  }

  onLoginCompleted(user) {
    // if (!auth.currentUser) return;
    // auth.currentUser
    //   .sendEmailVerification()
    //   // eslint-disable-next-line no-console
    //   .catch(error => console.error(error));
    // this.$store
    //   .dispatch('user/initFromFirebaseAuth', user)
    //   .then(() => this.$router.push('/account/verify-email'));
  }

  isFieldEmpty(value, fieldName) {
    return !!value || `${fieldName} is required`;
  }

  isFieldLengthy(value, maxLength, fieldName) {
    return (
      value.length <= maxLength ||
      `${fieldName} must be less than ${maxLength} characters`
    );
  }
}
</script>
