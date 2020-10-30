import jsPDF from 'jspdf';
import _ from 'lodash';

export function fetchReq(path, opt = {}){
    const options = {
      method: opt.method || 'POST',
      headers: opt.headers || {
        'Content-Type': 'application/json',
      },
      body: opt.body || null
    }
    return fetch(path, options)
      .then(res => res.json())
      .then(res =>
        { 
          if(res.success){
            return (res.data)
          } else {
            throw (res.msg || res) 
          }
        })
  }

  export function fetchStream(path, opt = {}){
    const options = {
      method: opt.method || 'POST',
      headers: opt.headers || {
        'Content-Type': 'application/json',
      },
      body: opt.body || null
    }
    return fetch(path, options)
      .then(res => res.blob())
  }

  export function getToken() {
    return localStorage.getItem('token');
  }

  export function setToken(token) {
    localStorage.setItem('token', token);
  }

  export function removeToken() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('token');
  }

  export function isValidDate(d) {
    return d instanceof Date && !isNaN(d);
  }

  export function generatePDF(fields, fieldTitle, data, fileName) {
    const pdf = new jsPDF('p', 'in', 'letter');
    const pageHeight = pdf.internal.pageSize.height;
    const margin = 0.5;
    const size = 12;
    let curLines = [];
    let lastLine = pdf.splitTextToSize('', 7.5);
    let longStr = ''
    let verticalOffset = margin;

    let contents = [];

    _.forEach(fields, (key, index) => {
        contents.push(fieldTitle[key] + ': \n' + data[key] || '')

        longStr = contents.join('\n\n')

        curLines = pdf.splitTextToSize(longStr, 7.5)
        verticalOffset = verticalOffset + (curLines.length + 0.5) * size / 72


        if (verticalOffset > pageHeight) {          
            if (index === fields.length - 1) {
                pdf.text(0.5, margin + size / 72, curLines)
            } else {
                pdf.text(0.5, margin + size / 72, lastLine)

                pdf.addPage();
                verticalOffset = margin // Restart height position
                contents = [fieldTitle[key] + ': \n' + data[key] || '']
            }
        } else {          
            if (index === fields.length - 1) {
                pdf.text(0.5, margin + size / 72, curLines)
            } else {
                lastLine = curLines
            }
        }
    })
    
    pdf.save(fileName)
}