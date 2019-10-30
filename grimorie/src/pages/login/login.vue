<template>
  <LoginTemplate>
    <span slot="esquerda">
      <SidebarLeft />
    </span>
    <span slot="direita">
      <h2>Login:</h2>

      <input type="text" name="email" id="email" placeholder="Email" v-model="user.email" />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Senha"
        v-model="user.password"
      />
      <button type="submit" v-on:click="login()" class="btn">Entrar</button>
      <router-link to="/cadastro" class="btn orange">Cadastre-se</router-link>
    </span>
  </LoginTemplate>
</template>

<script>
import LoginTemplate from "@/templates/LoginTemplate";
import MaterializeGrid from "@/components/MaterializeGrid";
import SidebarLeft from "@/layout/SidebarLeft.vue";

export default {
  name: "Login",
  components: {
    MaterializeGrid,
    LoginTemplate,
    SidebarLeft
  },
  methods: {
    login() {
      console.log("Carregando Informações...");
      this.axios
        .post(this.$apiUrl + "/api/login", {
          email: this.user.email,
          password: this.user.password
        })
        .then(response => {
          console.log(response);
          if (response.data.hasOwnProperty("user")) {
            sessionStorage.setItem('user',JSON.stringify(response.data.user));
            this.$router.push("/");
            console.log("Login efetuado com Sucesso");
          } else if (response.data.status == false) {
            // login não existe
            alert("Erro no Cadastro! Entre em contato ou tente novamente mais tarde.")
          } else {
            // erros na de validação
            let erros = "";
            for (let erro of Object.values(response.data)) {
              erros += erro + "\r\n";
            }
            alert(erros);
            console.log("erros na de validação");
          }
          console.log("Carregamento completo.");
        })
        .catch(error => {
          console.log(error);
          alert("Erro: Tente novamente mais tarde.")
          console.log("Carregamento completo.");
        });
    }
  },
  data() {
    return {
      cadastro: false,
      user: {
        email: "",
        password: ""
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
