import 'reflect-metadata';
import { Component } from '@angular/core';
import { FormBuilder, ControlGroup, Validators, Control } from '@angular/common';
import { Router, RouteParams} from '@angular/router-deprecated';
import { Songs } from '../../../collections/songs.ts';

@Component({
    selector: 'edit-song-form',
    templateUrl: '/client/imports/songs-form/edit-song-form.html'
})
export class EditSongForm {
    editSongForm: ControlGroup;
    song: Mongo.Cursor<Object>;
    id = '';

    constructor(params : RouteParams, private router : Router) {
        this.id = params.params.id;
        this.song = Songs.findOne({_id : this.id});

        let fb = new FormBuilder();

        this.editSongForm = fb.group({
            name: [this.song.name , Validators.required],
            singer: [this.song.singer, Validators.required],
            album: [this.song.album, Validators.required]
        });
    }
    EditSong(song) {
        if (this.editSongForm.valid) {
            Songs.update({ _id:  this.id },{
                name: song.name,
                singer: song.singer,
                album: song.album
            });

            (<Control>this.editSongForm.controls['name']).updateValue('');
            (<Control>this.editSongForm.controls['singer']).updateValue('');
            (<Control>this.editSongForm.controls['album']).updateValue('');
            this.router.navigate(['/List']);
        }else{
            alert("Can't left field(s) empty");
        }
    }
}