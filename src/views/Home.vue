<template>
  <div>
    <Menu></Menu>
    <div class="container">
      <Titulo></Titulo>

      <RowFilters></RowFilters>
      <div class="row-comss">
        <p class="text-right">
          <span class="text-blue">PIS:</span>
          <span class="mr-2">2%</span>
          <span class="text-blue">CONFINS:</span>
          <span class="mr-2">2%</span>
          <span class="text-blue">COMISSÃO:</span>
          <span>15%</span>
        </p>
      </div>
      <b-table :items="produtos" :fields="fields" striped hover>
        <template #cell(cost)="data">
          <b-form-input
            plaintext
            :id="data.item.id"
            v-model="values[data.index]"
            number
            step="0.01"
            @focus="habEdit(data.item, data.index)"
            @blur="closeEdit(data.item)"
            @keyup="startCountdown(data.item)"
            @keydown="clearCountdown"
          >
          </b-form-input>
        </template>
        <template #cell(margem)="data">
          {{ formatMoney((data.item.cost * 15) / 100) }}
        </template>
        <template #cell(frete)="data">
          {{ formatMoney(data.item.south_shipping) }}
          <br />
          {{ formatMoney(data.item.north_shipping) }}
        </template>
        <template #cell(acoes)>
          <b-button size="sm" variant="outline-secondary"
            >Enviar preço</b-button
          >
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import Menu from "@/components/menu.vue";
import Titulo from "@/components/titulo-b2w.vue";
import RowFilters from "@/components/row-filters.vue";

export default {
  name: "Home",
  data() {
    return {
      plain: true,
      values: [],
      typingTimer: null,
      doneTypingInterval: 1000,
      fields: [
        { key: "code", sortable: true, label: "Código" },
        { key: "name", label: "Produto", sortable: true },
        { key: "cost", label: "Custo", sortable: true },
        { key: "margem", label: "Margem", sortable: true },
        { key: "frete", label: "Frete" },
        { key: "acoes", label: "" },
      ],
    };
  },
  components: {
    Menu,
    Titulo,
    RowFilters,
  },
  computed: {
    produtos() {
      return this.$store.state.produtos;
    },
  },
  created() {
    this.$store.dispatch("GET_PRODUTOS");
  },
  watch: {
    produtos() {
      this.selectValues();
    },
  },
  methods: {
    selectValues() {
      const prods = this.$store.state.produtos;

      prods.forEach((element, index) => {
        this.values[index] = element.cost;
      });
    },
    formatMoney(money) {
      return money.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });
    },
    habEdit(item, index) {
      const input = document.getElementById(item.id);
      input.classList.remove("form-control-plaintext");
      input.value = this.values[index];
      input.removeAttribute("readonly");
      input.classList.add("form-control");
    },
    closeEdit(item) {
      const input = document.getElementById(item.id);
      input.classList.remove("form-control");
      input.setAttribute("readonly", "readonly");
      input.classList.add("form-control-plaintext");
    },
    startCountdown(item) {
      clearTimeout(this.typingTimer);
      this.typingTimer = setTimeout(this.setNewValue(item), this.doneTypingInterval);
    },
    clearCountdown() {
      clearTimeout(this.typingTimer);
    },
    setNewValue(item) {
      const input = document.getElementById(item.id);
      setTimeout(() => {
        input.classList.remove("form-control");
        input.setAttribute("readonly", "readonly");
        input.classList.add("form-control-plaintext");
        alert("Preço alterado!");
      }, 1000);
    },
  },
};
</script>

<style scoped>
.row-comss {
  font-size: 0.85em;
  margin-top: 48px;
}
.text-blue {
  font-weight: bold;
  color: #1959c2;
}
.mr-2 {
  margin-right: 16px;
}
.text-right {
  text-align: right;
}
</style>