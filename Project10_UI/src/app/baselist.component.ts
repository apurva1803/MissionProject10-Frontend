import { AfterViewInit, Directive, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceLocatorService } from './service-locator.service';
import { BaseCtl } from './base.component';

@Directive()
export class BaseListCtl extends BaseCtl  {
    @ViewChildren('checkboxes') checkboxes!: QueryList<ElementRef<HTMLInputElement>>;

    public isMasterSel = false;
    deleteRecordList: any[] = [];

    constructor(endpoint: String, serviceLocator: ServiceLocatorService, route: ActivatedRoute) {
        super(endpoint, serviceLocator, route);
    }

    override ngOnInit(): void {
        super.ngOnInit();
        this.search();
    }

    checkUncheckAll(event: any) {
        const checked = event.target.checked;
        this.checkboxes.forEach(cb => cb.nativeElement.checked = checked);
    }

    checklistUpdate() {
        const totalChecked = this.checkboxes.filter(cb => cb.nativeElement.checked).length;
        this.isMasterSel = totalChecked === this.form.list.length;
    }

    next(): void {
        this.form.pageNo++;
        this.search();
    }

    previous(): void {
        if (this.form.pageNo > 0) {
            this.form.pageNo--;
            this.search();
        }
    }

    override deleteMany() {
        this.form.error = false;
        this.deleteRecordList = [];


        this.checkboxes.forEach(cb => {
            if (cb.nativeElement.checked) {
                this.deleteRecordList.push(cb.nativeElement.id);
            }
        });

        if (this.deleteRecordList.length > 0) {

            this.form.pageNo = 0;

            super.deleteMany(this.deleteRecordList + '?pageNo=' + this.form.pageNo);

        } else {

            this.form.error = true;
            this.form.message = "Select at least one record";
        }

        this.isMasterSel = false;


    }
    
}