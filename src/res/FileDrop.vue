<script setup lang="ts">
import FileUpload from 'primevue/fileupload';
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';


const toast = useToast();
const onUpload = () => {
    toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
}
// const onUpload = () => {

// }

</script>

<template>
    <h1>現在鋭意開発中</h1>
    <FileUpload mode="basic" name="demo[]" accept="image/*" :maxFileSize="1000000" @upload="onUpload" :auto="true"
        chooseLabel="Browse" />
</template>