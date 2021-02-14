<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
       <b-navbar-brand>
          <img height="25px" alt="Vue logo" src="../assets/logo.png">
      </b-navbar-brand>
      <b-navbar-brand class="ml-auto mr-0">
        {{title}}
      </b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-navbar-nav>
          <b-nav-item><router-link to="/">{{$t('nav.home')}}</router-link></b-nav-item>
          <b-nav-item><router-link to="/contact">{{$t('nav.contact')}}</router-link></b-nav-item>
        </b-navbar-nav>
        <b-nav-item-dropdown :text="$t('nav.lang')" right>
          <b-dropdown-item @click="setLang('tr')">TR</b-dropdown-item>
          <b-dropdown-item @click="setLang('en')">EN</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-navbar-nav v-if="!isLoggedin">
          <b-button v-b-modal.modal-1><b-icon icon="person-fill"></b-icon></b-button>
        </b-navbar-nav>
        <b-nav-item-dropdown v-if="isLoggedin" right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>{{user.email}}</em>
          </template>
          <b-dropdown-item @click="logout">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
    <b-modal ref="login-modal" id="modal-1" :title="$t('home.login')" hide-footer>
      <div>
        <b-form>
          <b-form-group
            :label="$t('home.email')"
            label-for="input-email"
          >
            <b-form-input
              id="input-email"
              v-model="form.email"
              type="email"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            :label="$t('home.name')"
            label-for="name">
            <b-form-input
              id="name"
              v-model="form.name"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-2"
            :label="$t('home.password')"
            label-for="password">
              <b-form-input
                type="password"
                id="password"
                v-model="form.password"
              ></b-form-input>
          </b-form-group>
        </b-form>
        <b-button
          class="mt-3"
          variant="outline-danger"
          block
          @click="hideModal">
            {{$t('home.close')}}
        </b-button>
        <b-button
          class="mt-2"
          variant="outline-success"
          block
          @click="onSubmit">
            {{$t('home.save')}}
        </b-button>
      </div>
    </b-modal>
  </b-navbar>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Header',
  data() {
    return {
      title: '',
      form: {
        email: '',
        name: '',
        password: null,
      },
    };
  },
  computed: {
    ...mapState(['isLoggedin', 'user']),
  },
  methods: {
    setLang(lang) {
      this.$i18n.locale = lang;
    },
    onSubmit() {
      this.$store.dispatch('save', this.form);
      this.$refs['login-modal'].hide();
    },
    hideModal() {
      this.$refs['login-modal'].hide();
    },
    logout() {
      this.$store.commit('setUser', []);
      this.$store.commit('setIsLoggedin', false);
    },
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        this.title = to.meta.title;
      },
    },
  },
};
</script>
<style>
  .nav-item a {
    color:white !important;
  }
  .dropdown-menu a {
    color: black !important;
  }
</style>
