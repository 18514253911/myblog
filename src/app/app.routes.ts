import { RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {CompatibilityComponent} from './compatibility/compatibility.component'

export const appRoutes=[{
        path:'',
		redirectTo:'home',
		pathMatch:'full'
    },{
        path:'home',
	    component:HomeComponent
    },{
        path:'compatibility',
	    component:CompatibilityComponent
    }
    
]
