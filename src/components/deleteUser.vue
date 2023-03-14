<template>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td><button @click="deleteUser(index)">Delete</button></td>
        </tr>
      </tbody>
    </table>
  </template>
  

<script>
export default {
  data() {
    return {
        firstName: '',
          lastName: '',
          gender: '',
          cellPhoneNumber: '',
          emailAdd: '',
          userPass: '',
          userProfile: '',
          joinDate: ''
    }
  },
  methods: {
    deleteUser(index) {
      // Code to delete the user from the array
      this.user.splice(index, 1);
    }
  }
}
</script>
