import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {   path: 'loader', loadChildren: './loader-svg/loader.module#LoaderPageModule'},

    {   path: '', redirectTo: 'loader', pathMatch: 'full'},

    {   path: 'home', loadChildren: './home/home.module#HomePageModule'},

	//   {
	//     path: 'list',
	//     loadChildren: './list/list.module#ListPageModule'
	//   },
	//   { path: 'drink-detail', loadChildren: './list/drink-detail/drink-detail.module#DrinkDetailPageModule' }

	// { path: 'list', redirectTo: 'list', pathMatch: 'full' },
	{
		path: 'list', children: [
			{ path: '', loadChildren: './list/list.module#ListPageModule' },
			{ path: ':drinkId', loadChildren: './list/drink-detail/drink-detail.module#DrinkDetailPageModule' }
		]
	},
    {   path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' }
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule {}
