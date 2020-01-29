<template>
    <div class="table-container">
        <ag-grid-vue class="ag-theme-balham"
                    :columnDefs="columnDefs"
                    :rowData="rowData"
                    rowSelection="multiple"
                    :frameworkComponents="frameworkComponents"
                    @grid-ready="onGridReady"
                    >
        </ag-grid-vue>
    </div>
</template>
<script>
import {AgGridVue} from "ag-grid-vue"
import CustomCellEditor from "./CustomCellEditor"
export default {
    name: 'CustomTable', 
    components:{
        'ag-grid-vue': AgGridVue, 
        CustomCellEditor
    }, 
    data(){
        return {
            columnDefs :[
                {headerName: 'Post', field: 'id', checkboxSelection: true},
                {headerName: 'Usuario', field: 'userId'},
                {headerName: 'Titulo', field: 'title', editable:true, cellEditorFramework: 'CustomCellEditor'},
                {headerName: 'Contenido', field: 'body'}
            ]
        }
        
    }, 
    computed:{
        rowData(){
            return this.$store.state.posts
        }, 
        frameworkComponents(){
            return {
                cellEditorFramework: this.CustomCellEditor
            }
        }
    },
    methods: {
        onGridReady(params) {
            params.api.sizeColumnsToFit();
            this.gridApi = params.api;
            this.columnApi = params.columnApi;
        },
    },
    created(){
        this.$store.dispatch('getPosts')
    }

    
}
</script>
<style>
.table-container{
    display: grid;
}
.ag-theme-balham{
    margin: auto;
    width: 70%;
    height: 70vh;
    
}

</style>