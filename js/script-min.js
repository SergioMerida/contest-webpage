function sendTheMail(){var e=$("#nameField").val(),a=$("#companyField").val(),i=$("#emailField").val(),n=$("#messageField").val();$("#nameField").val(""),$("#companyField").val(""),$("#emailField").val(""),$("#messageField").val("");var o="Name: "+e+"\nCompany: "+a+"\nMessage:\n\n"+n,l={message:{from_email:i,to:[{email:"tabarinisergio@gmail.com"}],subject:"New contact mail",text:o}};m.messages.send(l,function(e){console.log(JSON.stringify(e))},function(e){console.log(JSON.stringify(e))})}var apiKey="2ZMRx5Wr9KOKm3hCKTfc4Q",m=new mandrill.Mandrill(apiKey);$(document).ready(function(){$(function(){$("#nameField").popover({content:"Your name."}),$("#emailField").popover({content:"Your email."}),$("#companyField").popover({content:"Your company."}),$("#messageField").popover({content:"Your message."})}),$(".ir-arriba").click(function(){$("body, html").animate({scrollTop:"0px"},300)}),$(window).scroll(function(){$(this).scrollTop()>0?$(".ir-arriba").slideDown(300):$(".ir-arriba").slideUp(300)})});