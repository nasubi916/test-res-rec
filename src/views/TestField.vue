<script setup lang="ts">
import { useToast } from "primevue/usetoast";
import Toast from 'primevue/toast';
import Button from "primevue/button";

const toast = useToast();

const showSuccess = () => {
    toast.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', life: 3000 });
}
const showError = () => {
    toast.add({ severity: 'error', summary: 'Error Message', detail: 'Message Content', life: 3000 });
}

</script>


<template>
        <Toast />
            <Button label="Success" class="p-button-success" @click="showSuccess" />
            <Button label="Error" class="p-button-danger" @click="showError" />
</template>

