<template>
<div>
<form>
<input type="text" placeholder="username" v-model="username">
<input type="password" placeholder="password" v-model="password">
<button type="submit">login</button>
</form>
<p>user name ={{username}}</p>
<p>password ={{password}}</p>
<div>vos identifient sont : <strong></strong></div>

</div>
</template>

<script>
export default{
        data(){
                return{
                        username:"chadry",
                        password:"7"
                        
                }
        },
        methods:{
                login(){

                },
                performlogin(){
                        this.result=""
                }
        
                
        }

}

</script>
<style scoped>
</style>