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
          v-model="selectOptions"
        >
          <option selected>Seleccione el tipo de Algoritmo</option>
          <option value="BUBBLE_SORT">ALGORITMO BURBUJA</option>
          <option value="INSERTION_SORT">ALGORITMO DE INSERCION</option>
          <option value="SELECTION_SORT">ALGORITMO DE SELECCION</option>
        </select>
      </div>
      <br />
      <button class="btn btn-success" @click="addNumbers()">
        Agregar al arreglo
      </button>
      <br />

      <button class="btn btn-primary" @click="queryResults()">
        Mostrar Arreglo
      </button>
      <br />

      <div class="card">
        <div class="card-body">
          <h1 class="text-center h5 mb-3">Arreglo Original: {{ results }}</h1>
        </div>
        <div class="card-content" v-if="arrayData.length > 0">
          <h1 class="text-center h5 mb-3">Arreglo Ordenado: {{ arrayData }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Arrays-app",
  props: {
    msg: String,
  },

  data() {
    return {
      number: 0 as number,
      results: [] as any,
      arrayData: [] as any,
      selectOptions: "" as string,
    };
  },
  methods: {
    async queryResults() {
      let algorithmType = this.selectOptions;

      if (algorithmType === "") {
        alert("Seleccione el tipo de Algoritmo");
        return;
      }
      if (algorithmType === "BUBBLE_SORT") {
        for (let j = 1; j < this.arrayData.length; j++) {
          for (let i = 0; i < this.arrayData.length - j; i++) {
            if (this.arrayData[i] > this.arrayData[i + 1]) {
              let temp = this.arrayData[i];

              this.arrayData[i] = this.arrayData[i + 1];

              this.arrayData[i + 1] = temp;
            }
          }
        }

        return this.arrayData;
      }

      if (algorithmType === "INSERTION_SORT") {
        for (let i = 1; i < this.arrayData.length; i++) {
          let j = i - 1;
          let aux = this.arrayData[i];
          while (j >= 0 && this.arrayData[j] > aux) {
            this.arrayData[j + 1] = this.arrayData[j];
            --j;
          }
          this.arrayData[j + 1] = aux;
        }
        return this.arrayData;
      }

      if (algorithmType === "SELECTION_SORT") {
        let aux: number[] = [...this.arrayData];
        for (let i = 1; i < this.arrayData.length; i++) {
          let min = aux
            .slice(i + 1)
            .reduce((a, e, j) => (e < aux[a] ? j + i + 1 : a), i);
          if (min != i) {
            [aux[i], aux[min]] = [aux[min], aux[i]];
          }
        }
        console.log("aux" + aux + "arrayData" + this.arrayData);
      }
      return this.arrayData;
    },
    addNumbers() {
      this.arrayData.push(this.number);
      this.results = [...this.arrayData];
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
