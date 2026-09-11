import { Directive, OnInit } from "@angular/core";
import { ServiceLocatorService } from "./service-locator.service";
import { ActivatedRoute } from "@angular/router";


@Directive()
export class BaseCtl implements OnInit {

    public form: any = {

        error: false, //error 
        inputerror: {}, // form input error messages
        message: null, //error or success message
        data: { id: null }, //form data
        searchParams: {}, //search form
        preload: { roleList: [] }, // preload data
        list: [], // search list 
        pageNo: 0,
        nextListSize: 0
        
    };

    public api: any = {
        endpoint: '',
        get: '',
        save: '',
        search: '',
        deleteMany: '',
        preload: '',
    }

    initApi(ep: any) {
        this.api.endpoint = ep;
        this.api.get = ep + "/get";
        this.api.save = ep + "/save";
        this.api.search = ep + "/search";
        this.api.deleteMany = ep + "/deleteMany";
        this.api.preload = ep + "/preload";
    }

    constructor(public endpoint: String, public serviceLocator: ServiceLocatorService, public route: ActivatedRoute) {
        var _self = this;
        _self.initApi(endpoint);
    }

    ngOnInit(): void {
        console.log("ngOnInit called");
        this.preload();

        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.form.data.id = Number(id);
            this.display();
        }
    }

    preload() {
        console.log("PRELOAD METHOD CALLED");
        var _self = this;
        this.serviceLocator.httpService.get(_self.api.preload, function (res: any) {
            if (res.success) {
                console.log(res.result)
                _self.form.preload = res.result;
                console.log(_self.form.preload.roleList)
            }
        });
    }

    
    getRole(): string {
        return (localStorage.getItem('role') || '').trim().toLowerCase();
    }

    isStudentRole(): boolean {
        return this.getRole() === 'student';
    }

    isEditMode(): boolean {
        return Number(this.form.data.id) > 0;
    }

    search() {
        var _self = this;
        this.serviceLocator.httpService.post(_self.api.search + "/" + _self.form.pageNo, _self.form.searchParams, function (res: any) {
            _self.form.message = '';
            _self.form.list = [];
            if (res.success) {
                _self.form.error = false;
                _self.form.list = res.result.data;
                _self.form.nextListSize = res.result.nextListSize;
            } else {
                _self.form.error = true;
                _self.form.message = res.result.message;
            }
        });
    }

    deleteMany(id: any) {
        var _self = this;
        var deleteUrl = _self.api.deleteMany + "/" + id + "?pageNo=" + _self.form.pageNo;
        this.serviceLocator.httpService.post(deleteUrl, this.form.searchParams, function (res: any) {
            _self.form.message = '';
            _self.form.list = [];
            if (res.success) {
                _self.form.error = false;
                _self.form.message = res.result.message;
                _self.form.list = res.result.data;
                _self.form.nextListSize = res.result.nextListSize;
            } else {
                _self.form.error = true;
                _self.form.message = res.result.message;
            }
        });

        
    }
    
    forward(page: any) {
        this.serviceLocator.forward(page);
    }

    reset() {
        location.reload();
    }
    
    display() {
    var _self = this;
    this.serviceLocator.httpService.get(
      _self.api.get + '/' + _self.form.data.id,
      function (res: any) {
        if (res.success) {
          _self.form.data = res.result.data;
        } else {
          _self.form.error = true;
          _self.form.message = res.result.message;
        }
      },
    );
    }

    submit(callback?: (id: any) => void) {
        var _self = this;

        this.serviceLocator.httpService.post(this.api.save, this.form.data,function (res: any) {
            // reset
            _self.form.message = '';
            _self.form.inputerror = {};
            _self.form.error = false;

            if (res.success) {
            // ✅ success message
            _self.form.message = res.result.message;

            // ✅ ID set (IMPORTANT)
            _self.form.data.id = res.result.data;

            // ✅ callback call (for image upload etc.)
            if (callback) {
                callback(_self.form.data.id);
            }
            } else {
            // ❌ validation error
            _self.form.error = true;

            if (res.result.inputerror) {
                _self.form.inputerror = res.result.inputerror;
            }

            _self.form.message = res.result.message;

            console.log('Validation Error:', res.result);
            }
        },
        );

    }
}