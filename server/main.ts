/**
 * Created by it on 4/6/16.
 */
import {loadSongs} from './load-songs.ts';
import {Meteor} from 'meteor/meteor';

Meteor.startup(loadSongs);