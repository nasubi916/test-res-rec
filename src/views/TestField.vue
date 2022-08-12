<script setup lang="ts">
import Button from "primevue/button";
import InputNumber from "primevue/inputnumber";
import InputText from 'primevue/inputtext'


</script>


<template>
    <h5>Button Addons</h5>
    <div class="grid p-fluid">
        <div>
            <div class="p-inputgroup">
                <Button label="Search" />
                <InputText placeholder="Keyword" />
            </div>
        </div>

        <div>
            <div class="p-inputgroup">
                <InputText placeholder="Keyword" />
                <Button icon="pi pi-search" class="p-button-warning" />
            </div>
        </div>

        <div>
            <div class="p-inputgroup">
                <Button icon="pi pi-check" class="p-button-success" />
                <InputText placeholder="Vote" />
                <Button icon="pi pi-times" class="p-button-danger" />
            </div>
        </div>
    </div>
</template>

