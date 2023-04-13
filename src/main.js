import $ from 'jquery';
import Journal from './journal.js';
import './css/bootstrap.css';
import './css/styles.css';

$('#journal-form').submit(function (event) {
    event.preventDefault();
    let title = $('#title').val();
    let body = $('#text-passage').val();
    let newJournal = new Journal(title, body);
    $('#wordCounter').text(newJournal.wordCounter());
    $('#vowelCounter').text(newJournal.charCounter()[0]);
    $('#consonantCounter').text(newJournal.charCounter()[1]);
    $('#getTeaser').text(newJournal.getTeaser());
  
  
    $("#fg").click(function () {
      $("#res").show();
      $("#results").show();
    });
});
  