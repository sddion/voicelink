document.addEventListener("DOMContentLoaded",function(){var phoneInput=document.querySelector("#input");var callButton=document.querySelector("#call");phoneInput.value='';var iti=window.intlTelInput(phoneInput,{initialCountry:"auto",separateDialCode:!0,utilsScript:"/utils.js"});iti.promise.then(function(){phoneInput.addEventListener("countrychange",function(){var selectedCountry=iti.getSelectedCountryData();var countryCode=selectedCountry.dialCode;phoneInput.value='+'+countryCode})});callButton.addEventListener("click",function(){var dialCode=iti.getSelectedCountryData().dialCode;phoneInput.value='+'+dialCode+phoneInput.value});$(document).ready(function(){$('.digit').on('click',function(){var number=$(this).text().trim();var primaryDigit=number.charAt(0);$('#input').val($('#input').val()+primaryDigit)})})})