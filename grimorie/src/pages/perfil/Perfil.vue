<template>
  <SiteTemplate>
    <span slot="esquerda">
      <SidebarLeft />
    </span>
    <span slot="direita">
      <h2>Perfil</h2>
      <input type="text" name="username" id="username" placeholder="Usuário" v-model="user.name" />
      <input type="email" name="email" id="email" placeholder="Email" v-model="user.email" />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Senha"
        v-model="user.password"
      />
      <input
        type="password"
        name="password_confirmation"
        id="password_confirmation"
        placeholder="Confirme a Senha"
        v-model="user.password_confirmation"
      />
      <div class="file-field input-field">
        <div class="btn">
          <span>Imagem</span>
          <input type="file" />
        </div>
        <div class="file-path-wrapper">
          <input class="file-path validate" type="text" />
        </div>
      </div>
      <button type="submit" class="btn" v-on:click="atualizar()">Atualizar</button>
      <!-- <button type="submit" class="btn">Esqueci</button> -->
    </span>
  </SiteTemplate>
</template>

<script>
import SiteTemplate from "@/templates/SiteTemplate";
import MaterializeGrid from "@/components/MaterializeGrid";
import SidebarLeft from "@/layout/SidebarLeft.vue";

export default {
  name: "Cadastro",
  components: {
    MaterializeGrid,
    SiteTemplate,
    SidebarLeft
  },
  methods: {
    atualizar() {
      console.log("Carregando Informações");
      this.axios
        .put(this.$apiUrl + "/api/perfil", {
          name: this.user.name,
          email: this.user.email,
          password: this.user.password,
          password_confirmation: this.user.password_confirmation,
          token: this.user.token
        },{
            "headers":{
                "authorization": "Bearer "+this.user.token
            }
        })
        .then(response => {
          console.log(response);
          if (response.data.hasOwnProperty("user")) {
            // login com sucesso
            console.log("Atualização feita com Sucesso");
            sessionStorage.setItem("user", JSON.stringify(response.data.user));
          } else if (response.data.status == false) {
            // login não existe
            console.log("login não existe");
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
          console.log("Carregamento completo.");
        });
    }
  },
  created(){
    let user = sessionStorage.getItem('user');
    if(user){
      this.user = JSON.parse(user);
    }
  },
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
