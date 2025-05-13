import { Component, inject, OnInit } from '@angular/core';
import { JokesService } from 'src/app/shared/services/jokes.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-http-client-example',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './http-client-example.component.html',
  styleUrl: './http-client-example.component.css'
})
export class HttpClientExampleComponent implements OnInit {
  jokeService = inject(JokesService)

  dadJoke: string = '';
  chuckNorrisJoke: string = '';

  // σε services με promises, όπως ο HTTP Client, .subscribe στο promise που θα μπει στη μεταβλητή data
  ngOnInit(): void {
    // this.jokeService.getDadJokes().subscribe((data) => {
    //   console.log("DAD JOKE OBJECT>>>", data)
    //   console.log("DAD JOKE>>>", data.joke)
    // });

    // this.jokeService.getChuckNorrisJoke().subscribe((data) => {
    //   console.log("CHUCK NORRIS JOKE OBJECT>>>", data)
    //   console.log("CHUCK NORRIS JOKE>>>", data.value)
    // });
    this.refreshChuckNorrisJoke();
    this.refreshDadJoke();
  }

  refreshDadJoke() {
    this.jokeService.getDadJokes().subscribe((data) => {
      console.log("Dad Joke:", data.joke);
      this.dadJoke = data.joke;
    })
  }

  refreshChuckNorrisJoke() {
    this.jokeService.getChuckNorrisJoke().subscribe((data) => {
      console.log("Chuck Norris Joke:", data.value);
      this.chuckNorrisJoke = data.value;
    }

    )
  }
}
