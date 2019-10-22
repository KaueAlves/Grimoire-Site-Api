<template>
  <LoginTemplate>
    <span slot="esquerda">
      <SidebarLeft />
    </span>
    <span slot="direita">
      <h2>Cadastre-se:</h2>
      <input type="text" name="username" id="username" placeholder="Usuário" v-model="user.name"/>
      <input type="email" name="email" id="email" placeholder="Email" v-model="user.email"/>
      <input type="password" name="password" id="password" placeholder="Senha" v-model="user.password"/>
      <input type="password" name="password_confirmation" id="password_confirmation" placeholder="Confirme a Senha" v-model="user.password_confirmation"/>
      <button type="submit" class="btn" v-on:click="cadastrar()">Cadastre-se</button>
      <router-link to="/login" class="btn orange">Já tenho conta</router-link>
      <!-- <button type="submit" class="btn">Esqueci</button> -->
    </span>
  </LoginTemplate>
</template>

<script>
import LoginTemplate from "@/templates/LoginTemplate";
import MaterializeGrid from "@/components/MaterializeGrid";
import SidebarLeft from "@/layout/SidebarLeft.vue";

export default {
  name: "Cadastro",
  components: {
    MaterializeGrid,
    LoginTemplate,
    SidebarLeft
  },
  methods: {
    cadastrar(){
      this.axios
        .post(this.$apiUrl+"/api/cadastro",{
          name: this.user.name,
          email: this.user.email,
          password: this.user.password,
          password_confirmation: this.user.password_confirmation,
        })
        .then(response => {
          console.log(response);
          if(response.data.token){
            // login com sucesso
            console.log("sucesso");
          }else if(response.data.status == false){
            // login não existe
            console.log('login não existe');
          }else{
            // erros na de validação
            console.log('erros na de validação');
          }
          console.log("Carregamento completo.");
        })
        .catch(error => {
          console.log(error);
          console.log("Carregamento completo.");
        });
    }
  },
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
