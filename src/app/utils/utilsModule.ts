import { NgModule } from "@angular/core";
import { ASpacePipe } from "./pipes/ASpace.pipe";
import { RatingComponent } from "./components/rating/rating.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        ASpacePipe,
        RatingComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ASpacePipe,
        RatingComponent
    ]
})
export class UtilsModule{

}
