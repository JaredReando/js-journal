import { Entry } from './journal';
import './styles.css';

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var output = new Entry(title, body);
    output.forEach(function(element) {
      $('#entry').append("<li>" + element + "</li>");
    });
  });
});
