/**
 * Created by it on 4/6/16.
 */

import { Songs } from '../collections/songs.ts';

export function loadSongs() {
    if (Songs.find().count() === 0) {

        var songs = [
            {
                'name': 'Pehla nasha',
                'singer': '',
                'album': 'Palo Alto'
            },
            {
                'name': 'All dubstep all the time',
                'singer': 'Get it on!',
                'album': 'Palo Alto'
            },
            {
                'name': 'Savage lounging',
                'singer': 'Leisure suit required. And only fiercest manners.',
                'album': 'San Francisco'
            }
        ];

        for (var i = 0; i < songs.length; i++) {
            Songs.insert(songs[i]);
        }
    }
}