import { HttpClient } from '@angular/common/http';
import { Component, ComponentFactoryResolver, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import IdsDataGrid from 'ids-enterprise-wc/components/ids-data-grid/ids-data-grid';

@Component({
  selector: 'app-instances',
  templateUrl: './instances.component.html',
  styleUrls: ['./instances.component.scss']
})

export class InstancesComponent implements OnInit {
  dataGrid: IdsDataGrid;
  pagingToken: string;  // this the paging token for our grid
  isLoading: boolean = false; // are we busy loading data?
  
  
  constructor(private http: HttpClient, private router: Router) {
    // let container: any = document.querySelector('ids-container');
    // container?.setLocale(window.navigator.language);
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.dataGrid = document.querySelector<IdsDataGrid>('#instancesDataGrid');
    if (this.dataGrid) {
      this.setupColumns();
      //dataGrid.data = [];
    }
    else {
      console.error("Datagrid control not found");
    }
  }

  onRefreshClicked() {
  }

  onMockDataClicked() {
    this.dataGrid.data = [
      {

        instanceID: '1234',
        instanceRevision: '001',
        opportunityID: 'OP-789456',
        description: 'Acme New Sale',
        status: 'Cancelled',
        instanceType: 'Net New',
        created: '2022-03-08',
        createdBy: 'John Doe',
        bre100State: 'Uploaded',
        bre100StateIcon: 'success-alert',
        companyStructureDefinitionState: 'Empty',
        companyStructureDefinitionStateIcon: 'error-alert',
        companyStructurePPTXState: 'Uploaded',
        riceState: 'Uploaded'
      },
      {

        instanceID: '1234',
        instanceRevision: '002',
        opportunityID: 'OP-789456',
        description: 'Acme New Sale',
        status: 'Complete',
        instanceType: 'Net New',
        created: '2022-07-08',
        createdBy: 'John Doe'
      },
      {

        instanceID: '1235',
        instanceRevision: '001',
        opportunityID: 'OP-789500',
        description: 'Weyland Yutami',
        status: 'Active',
        instanceType: 'Net New',
        created: '2022-07-08',
        createdBy: 'John Doe'
      }
    ];
  }
  onNewClicked() {
    
  }

  onEditClicked() {
    
  }

  async onDeleteClicked() {
    
  }

  onRowDoubleClick(event: any) {
    
  }


  setupColumns() {
    this.dataGrid.data = [];
    
    this.dataGrid.columns = [
      {
        id: 'selectionCheckbox',
        field: 'selected',
        sortable: false,
        resizable: false,
        formatter: this.dataGrid.formatters.selectionCheckbox,
        align: 'center',
      },
      {
        id: 'instance',
        field: 'instanceID',
        name: 'Instance',
        resizable: true,
        reorderable: true,
        align: "right",
        filterType: this.dataGrid.filters.text,
        formatter: this.dataGrid.formatters.text
      },
      {
        id: 'revision',
        field: 'instanceRevision',
        name: 'Revision',
        resizable: true,
        reorderable: true,
        align: "right",
        filterType: this.dataGrid.filters.text,
        formatter: this.dataGrid.formatters.text
      },
      {
        id: 'opportunityid',
        field: 'opportunityID',
        name: 'Opportunity ID',
        resizable: true,
        reorderable: true,
        filterType: this.dataGrid.filters.text,
        formatter: this.dataGrid.formatters.text
      },
      {
        id: 'description',
        field: 'description',
        name: 'Description',
        resizable: true,
        reorderable: true,
        filterType: this.dataGrid.filters.text,
        formatter: this.dataGrid.formatters.text
      },
      {
        id: 'status',
        field: 'status',
        name: 'Status',
        resizable: true,
        reorderable: true,
        filterType: this.dataGrid.filters.text,
        formatter: this.dataGrid.formatters.text
      },
      {
        id: 'instanceType',
        field: 'instanceType',
        name: 'Type',
        resizable: true,
        reorderable: true,
        filterType: this.dataGrid.filters.text,
        formatter: this.dataGrid.formatters.text
      },
      {
        id: 'created',
        field: 'created',
        name: 'Created',
        readonly: true,
        resizable: true,
        reorderable: true,
        filterType: this.dataGrid.filters.date,
        formatter: this.dataGrid.formatters.date
      }
      ,
      {
        id: 'createdBy',
        field: 'createdBy',
        name: 'Created By',
        sortable: false,
        align: 'left',
        readonly: true,
        resizable: true,
        reorderable: true,
        filterType: this.dataGrid.filters.text,
        formatter: this.dataGrid.formatters.text
      }
    ];
    
  }
}
