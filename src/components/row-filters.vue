<template>
  <b-row cols="12" class="mt-5">
    <b-col sm="3">
      <b-button variant="outline-primary">Sincronizar Dados</b-button>
    </b-col>
    <b-col sm="9">
      <b-form>
        <b-row >
          <b-col>
            <b-input-group>
              <b-input-group-preppend>
                <b-input-group-text>
                  <b-icon-search></b-icon-search>
                </b-input-group-text>
              </b-input-group-preppend>
              <b-form-input
                size="sm"
                placeholder="Buscar pedido"
              ></b-form-input>
            </b-input-group>
          </b-col>
          <b-col>
            <b-form-select
              v-model="state"
              size="sm"
              :options="optionsState"
              class="form-control"
            ></b-form-select>
          </b-col>
          <b-col>
            <b-form-select
              v-model="state"
              size="sm"
              :options="optionsState"
              class="form-control"
            ></b-form-select>
          </b-col>
          <b-col>
            <div class="custom-control custom-checkbox mt-2">
              <input
                type="checkbox"
                id="checkboxPreju"
                class="custom-control-input"
              />
              <label for="checkboxPreju">Produtos com prejuízo</label>
            </div>
          </b-col>
          <b-col>
            <b-button variant="secondary">
              <b-icon-funnel-fill></b-icon-funnel-fill>
              Filtrar
            </b-button>
          </b-col>
        </b-row>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>
export default {
  data() {
    return {
      state: null,
      optionsState: [
        { value: null, text: "Estado", disabled: true },
        "Anunciado",
        "Não anunciado",
      ],
    };
  },
};
</script>

<style>
</style>