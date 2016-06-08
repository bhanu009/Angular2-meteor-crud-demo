import 'reflect-metadata';
import { Component } from '@angular/core';
import { FormBuilder, ControlGroup, Validators, Control } from '@angular/common';
import { Router} from '@angular/router-deprecated';
import { Songs } from '../../../collections/songs.ts';

@Component({
    selector: 'add-song-form',
    templateUrl: '/client/imports/songs-form/add-song-form.html'
})
export class AddSongForm {
    addSongForm: ControlGroup;

    constructor(private router : Router) {
        let fb = new FormBuilder();

        this.addSongForm = fb.group({
            name: ['', Validators.required],
            singer: ['', Validators.required],
            album: ['', Validators.required]
        });
    }
    addSong(song) {
        if (this.addSongForm.valid) {
            Songs.insert({
                name: song.name,
                singer: song.singer,
                album: song.album
            });

            (<Control>this.addSongForm.controls['name']).updateValue('');
            (<Control>this.addSongForm.controls['singer']).updateValue('');
            (<Control>this.addSongForm.controls['album']).updateValue('');
            this.router.navigate(['/List']);
        }else{
            alert('All fields are mandatory, Please fill');
        }
    }
}