import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SniperComponent } from "./components/sniper/sniper.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SniperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'apologies';
}
