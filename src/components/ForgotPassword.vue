<template>
    <form @submit.prevent="forgot"> 
        <h3>Forgot Password</h3>

        <div class="form-group">
            <label>Email</label>
            <input type="emailAdd" class="form-control" v-model="emailAdd" placeholder="Email"/>
        </div>

        <button class="btn btn-dark btn-block">Submit</button>
    </form>

</template>

<script>
import axios  from 'axios';
export default {
    name: 'Forgot',
    data() {
        return {
            email: ''
        }
    },
    methods: {
        async forgot() {
            const response = await axios.post('forgot', {
                email: this.emailAdd
            });  

            console.log(response);
        }
    }
}
</script>