import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TtsService } from 'src/app/services/tts.service';

@Component({
  selector: 'app-tts',
  templateUrl: './tts.component.html',
  styleUrls: ['./tts.component.css']
})
export class TtsComponent implements OnInit, AfterViewInit {
  @ViewChild('audioElement', { static: false }) audioRef!: ElementRef

  private audio!: HTMLMediaElement
  public sourceText!: string
  public audioSrc!: string
  constructor(
    private readonly ttsService: TtsService
  ) { }

  ngOnInit(): void {
    this.sourceText = ''
    this.audioSrc = ''
  }
  ngAfterViewInit(): void {
    this.audio = this.audioRef.nativeElement
    this.audio.autoplay = true
    this.audio.controls = true
    console.log(this.audio);

  }

  getVoiceFile() {
    this.ttsService.setSource(this.sourceText)
    this.ttsService.getAudioFile(this.ttsService.queryParts).subscribe({
      next: (res: any) => {
        console.log(res);
        this.audioSrc = window.URL.createObjectURL(res)
        //creer une reference via un element html genre queryselector de js

        console.log(this.audioSrc);

        if (this.audio.readyState >= 2) {
          this.audio.play()
        }

      }
    })

  }

}
