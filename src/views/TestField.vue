
<template>
    <div>
        <h5>Addons</h5>
        <div class="grid p-fluid">
            <div class="col-12 md:col-4">
                <div class="p-inputgroup">
                    <InputText placeholder="Username" />
                    <InputText placeholder="Price" />
                    <InputText placeholder="Website" />
                </div>
            </div>
        </div>

        <h5>Button Addons</h5>
        <div class="grid p-fluid">
                <div class="p-inputgroup">
                    <Button label="Search"/>
                    <InputText placeholder="Keyword"/>

                    <InputText placeholder="Keyword"/>
                    <Button icon="pi pi-search" class="p-button-warning"/>

                    <Button icon="pi pi-check" class="p-button-success"/>
                    <InputText placeholder="Vote"/>
                    <Button icon="pi pi-times" class="p-button-danger"/>
                </div>
        </div>

    </div>
</template>


<script setup lang="ts">
import Button from 'primevue/button';
import InputText from 'primevue/inputtext'

</script>