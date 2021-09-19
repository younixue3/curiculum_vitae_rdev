<template>
  <form @submit.prevent="login" class="absolute bg-white shadow-lg border border-gray-300 rounded-xl w-72 md:w-96 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
    <div class="my-10">
      <div class="text-4xl font-bold">Welcome</div>
      <div class="text-lg font-light leading-3">Sign in to your account</div>
      <div class="px-5 mt-5">
        <div v-if="error" class="bg-red-200 rounded-full">
          {{massage}}
        </div>
      </div>
    </div>
    <div class="mx-5 my-10">
      <input type="email" v-model="email" class="flex-1 block w-full rounded-t-xl focus:outline-none px-3 py-1.5 border border-b-0 border-gray-300" placeholder="Email">
      <input type="password" v-model="password" class="flex-1 block w-full rounded-b-xl focus:outline-none px-3 py-1.5 border border-gray-300" placeholder="Password">
    </div>
    <div class="mx-5 my-10">
      <div class="m-auto flex space-x-5">
        <button class="bg-indigo-500 text-xl text-white text-center rounded-md shadow-md w-full px-5 py-1"><span class="align-text-top">Sign in</span></button>
        <button class="text-xl text-indigo-500 text-center rounded-md shadow-md border border-gray-100 w-full px-5 py-1"><span class="align-text-top">Cancel</span></button>
      </div>
    </div>
  </form>
</template>

<script>
import axios from 'axios'
export default {
  name: "Login",
  components: {
  },
  data () {
    return {
      email: '',
      password: '',
      token: localStorage.getItem('user-token') || null,
      error: false,
      massage: null
    }
  },
  methods: {
    login() {
      axios.post('http://127.0.0.1:8000/api/auth/login', {
        email: this.email,
        password: this.password,
      })
          // console.log(username)
          .then(resp => {
            this.token = resp.data.token
            console.log(resp)
            localStorage.setItem('user-token', resp.data.token)
            localStorage.setItem('group-permission', resp.data.level)
            if (resp.data.token) {
              this.$router.push("/")
            } else {
              this.error = true
              this.massage = 'U are Intruder!!!'
            }
            // localStorage.setItem('role', resp.data.token)
          })
          .catch(e => {
            console.log(e)
            localStorage.removeItem('user-token')
            localStorage.removeItem('group-permission')
          })

    },
  }
}
</script>

<style scoped>

</style>
