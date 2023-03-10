<template>
  <div class="container">
    <div class="card card-body">
      <h1 class="text-center h3 mb-3">Algoritmos de ordenamiento</h1>

      <input
        type="number"
        placeholder="write a firts number"
        min="0"
        max="9"
        v-model="number"
        class="form-control mb-3"
      />
      <div class="form-group col-sm-6 flex-column d-flex">
        <label class="form-control-label px-3"
          >Tipo de Algoritmo<span class="text-danger"> *</span></label
        >
        <select
          class="form-select"
          aria-label="Default select example"
          v-model="data.selectionArray"
        >
          <option selected>Seleccione el tipo de Algoritmo</option>
          <option value="BUBBLE_SORT">ALGORITMO BURBUJA</option>
          <option value="INSERTION_SORT">ALGORITMO DE INSERCION</option>
          <option value="SELECTION_SORT">ALGORITMO DE SELECCION</option>
        </select>
      </div>
      <button class="btn btn-success" @click="addNumbers()">
        Agregar al arreglo
      </button>

      <button class="btn btn-primary" @click="queryResults()">
        Mostrar Arreglo
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ServiceApp } from "../service/service.data";
import {IData} from '../interface/data.interface'

export default defineComponent({
  name: "Arrays-app",
  props: {
    msg: String,
  },

  data() {
    return {
      data:{} as IData,
      number: 0 as number,
      results: [] as any,
      // selectOptions: "BUBBLE_SORT" | "INSERTION_SORT" | "SELECTION_SORT";
    };
  },
  methods: {
    async queryResults() {
      console.log(this.data)
      const responseData = await ServiceApp.sendData(this.data);
      console.log(responseData);
      console.log("Send array " + this.data.responseArray);
    },
    addNumbers() {
      let datos = [];
      datos.push(this.number);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      datos.forEach((element) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        this.data.responseArray.push(element);
      });
      
      console.log(this.data.responseArray);
      this.number = 0;
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
