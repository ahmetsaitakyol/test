<template>
  <div class="about">
    <b-card>
      <h3>{{$t('contact.contactUs')}}</h3>
      <b-form>
        <b-form-group
          :label="$t('contact.email')"
        >
          <b-form-input
            v-model="form.email"
            type="email"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          :label="$t('contact.name')"
        >
          <b-form-input
            v-model="form.name"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          :label="$t('contact.phonenumber')"
        >
          <b-form-input
            v-model="form.phonenumber"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          :label="$t('contact.country')"
        >
          <v-select :options="countries"
            @search="filteredCountries"
            @input="selectedCountry"
            label="name">
          </v-select>
        </b-form-group>
        <b-form-group
          :label="$t('contact.text')"
          label-for="textarea">
          <b-form-textarea
            id="textarea"
            v-model="form.text"
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-form-group>
        <b-button
          class="mt-2"
          variant="outline-success"
          block
          @click="onSubmit">
            {{$t('home.save')}}
        </b-button>
      </b-form>
    </b-card>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      title: '',
      form: {
        email: this.$store.state.email,
        name: this.$store.state.name,
        title: '',
        text: '',
        country_code: '',
      },
      countries: [],
    };
  },
  mounted() {
    this.setUserInfo();
  },
  computed: {
    ...mapState(['isLoggedin']),
  },
  methods: {
    filteredCountries(search) {
      this.searchCountry(search);
    },
    searchCountry(text) {
      // eslint-disable-next-line array-callback-return
      this.countries = this.$store.state.countries.filter((e) => e.name.indexOf(text) > -1);
    },
    selectedCountry(e) {
      if (e) {
        this.form.country_code = e.id;
      } else {
        this.form.country_code = null;
      }
    },
    onSubmit() {
      alert(this.$t('contact.check'));
      console.log(this.form);
    },
    setUserInfo() {
      this.form.email = this.$store.state.user.email;
      this.form.name = this.$store.state.user.name;
    },
  },
  watch: {
    isLoggedin(e) {
      if (e) {
        this.setUserInfo();
      }
    },
  },
};
</script>
