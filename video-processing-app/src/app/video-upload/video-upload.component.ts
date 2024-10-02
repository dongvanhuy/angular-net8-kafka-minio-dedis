import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-video-upload',
  templateUrl: './video-upload.component.html',
})
export class VideoUploadComponent {
  constructor(private http: HttpClient) {}

  uploadVideo(event: any) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('video', file);

    this.http.post('http://localhost:5000/api/video/upload', formData)
      .subscribe(response => {
        console.log('Video uploaded successfully', response);
      });
  }
}
