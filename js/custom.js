// Chart
document.addEventListener("DOMContentLoaded", function () {
    $('.js-example-basic-single').select2();
    $('[data-toggle="popover"]').popover();
     
    // Piechart]
    Highcharts.chart('containerpiechart', {
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Egg Yolk Composition'
        },
        tooltip: {
            valueSuffix: '%'
        },
        subtitle: {
            text:
            'Source:<a href="https://www.mdpi.com/2072-6643/11/3/684/htm" target="_default">MDPI</a>'
        },
        plotOptions: {
            series: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: [{
                    enabled: true,
                    distance: 20
                }, {
                    enabled: true,
                    distance: -40,
                    format: '{point.percentage:.1f}%',
                    style: {
                        fontSize: '1.2em',
                        textOutline: 'none',
                        opacity: 0.7
                    },
                    filter: {
                        operator: '>',
                        property: 'percentage',
                        value: 10
                    }
                }]
            }
        },
        series: [
            {
                name: 'Percentage',
                colorByPoint: true,
                data: [
                    {
                        name: 'Water',
                        y: 55.02
                    },
                    {
                        name: 'Fat',
                        sliced: true,
                        selected: true,
                        y: 26.71
                    },
                    {
                        name: 'Carbohydrates',
                        y: 1.09
                    },
                    {
                        name: 'Protein',
                        y: 15.5
                    },
                    {
                        name: 'Ash',
                        y: 1.68
                    }
                ]
            }
        ]
    });

    // Line Chart
    Highcharts.chart('containerlinechart', {

        title: {
            text: 'U.S Solar Employment Growth',
            align: 'left'
        },
        
        subtitle: {
            text: 'By Job Category. Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>.',
            align: 'left'
        },
        
        yAxis: {
            title: {
                text: 'Number of Employees'
            }
        },
        
        xAxis: {
            accessibility: {
                rangeDescription: 'Range: 2010 to 2020'
            }
        },
        
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
        
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 2010
            }
        },
        
        series: [{
            name: 'Installation & Developers',
            data: [
                43934, 48656, 65165, 81827, 112143, 142383,
                171533, 165174, 155157, 161454, 154610
            ]
        }, {
            name: 'Manufacturing',
            data: [
                24916, 37941, 29742, 29851, 32490, 30282,
                38121, 36885, 33726, 34243, 31050
            ]
        }, {
            name: 'Sales & Distribution',
            data: [
                11744, 30000, 16005, 19771, 20185, 24377,
                32147, 30912, 29243, 29213, 25663
            ]
        }, {
            name: 'Operations & Maintenance',
            data: [
                null, null, null, null, null, null, null,
                null, 11164, 11218, 10077
            ]
        }, {
            name: 'Other',
            data: [
                21908, 5548, 8105, 11248, 8989, 11816, 18274,
                17300, 13053, 11906, 10073
            ]
        }],
        
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
        
        });

    // KPI Chart
    $(document).ready(function() {
        // Function to render icons on the chart
        function renderIcons() {
            this.series.forEach(series => {
                if (!series.icon) {
                    series.icon = this.renderer
                        .text(
                            `<i class="fa fa-${series.options.custom.icon}"></i>`,
                            0,
                            0,
                            true
                        )
                        .attr({
                            zIndex: 10
                        })
                        .css({
                            color: series.options.custom.iconColor,
                            fontSize: '1.5em'
                        })
                        .add(this.series[2].group);
                }
                series.icon.attr({
                    x: this.chartWidth / 2 - 15,
                    y: this.plotHeight / 2 -
                        series.points[0].shapeArgs.innerR -
                        (
                            series.points[0].shapeArgs.r -
                            series.points[0].shapeArgs.innerR
                        ) / 2 +
                        8
                });
            });
        }

        const trackColors = Highcharts.getOptions().colors.map(color =>
            new Highcharts.Color(color).setOpacity(0.3).get()
        );

        // Initialize the Highcharts solid gauge
        Highcharts.chart('container', {
            chart: {
                type: 'solidgauge',
                height: '110%',
                events: {
                    render: renderIcons
                }
            },

            title: {
                text: 'Multiple KPI gauge',
                style: {
                    fontSize: '24px'
                }
            },

            tooltip: {
                borderWidth: 0,
                backgroundColor: 'none',
                shadow: false,
                style: {
                    fontSize: '16px'
                },
                valueSuffix: '%',
                pointFormat: '{series.name}<br>' +
                    '<span style="font-size: 2em; color: {point.color}; ' +
                    'font-weight: bold">{point.y}</span>',
                positioner: function(labelWidth) {
                    return {
                        x: (this.chart.chartWidth - labelWidth) / 2,
                        y: (this.chart.plotHeight / 2) + 15
                    };
                }
            },

            pane: {
                startAngle: 0,
                endAngle: 360,
                background: [{ // Track for Conversion
                    outerRadius: '112%',
                    innerRadius: '88%',
                    backgroundColor: trackColors[0],
                    borderWidth: 0
                }, { // Track for Engagement
                    outerRadius: '87%',
                    innerRadius: '63%',
                    backgroundColor: trackColors[1],
                    borderWidth: 0
                }, { // Track for Feedback
                    outerRadius: '62%',
                    innerRadius: '38%',
                    backgroundColor: trackColors[2],
                    borderWidth: 0
                }]
            },

            yAxis: {
                min: 0,
                max: 100,
                lineWidth: 0,
                tickPositions: []
            },

            plotOptions: {
                solidgauge: {
                    dataLabels: {
                        enabled: false
                    },
                    linecap: 'round',
                    stickyTracking: false,
                    rounded: true
                }
            },

            series: [{
                name: 'Conversion',
                data: [{
                    color: Highcharts.getOptions().colors[0],
                    radius: '112%',
                    innerRadius: '88%',
                    y: 80
                }],
                custom: {
                    icon: 'filter',
                    iconColor: '#303030'
                }
            }, {
                name: 'Engagement',
                data: [{
                    color: Highcharts.getOptions().colors[1],
                    radius: '87%',
                    innerRadius: '63%',
                    y: 65
                }],
                custom: {
                    icon: 'comments-o',
                    iconColor: '#ffffff'
                }
            }, {
                name: 'Feedback',
                data: [{
                    color: Highcharts.getOptions().colors[2],
                    radius: '62%',
                    innerRadius: '38%',
                    y: 50
                }],
                custom: {
                    icon: 'commenting-o',
                    iconColor: '#303030'
                }
            }]
        });
    });

});


// Swiper Slider
$(document).ready(function() {
    var swiper = new Swiper('.slide-content', {
        slidesPerView: 3,
        spaceBetween: 25,
        loop: true,
        centerSlide: 'true',
        fade: 'true',
        grabCursor: 'true',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            520: {
                slidesPerView: 2,
            },
            950: {
                slidesPerView: 3,
            },
        },
    });
});


// label
function toggleLabel(element) {
    if (element.classList.contains('labelactive')) {
        element.classList.remove('labelactive');
        element.classList.add('labelinactive');
        element.textContent = 'Inactive';
    } else {
        element.classList.remove('labelinactive');
        element.classList.add('labelactive');
        element.textContent = 'Active';
    }
}


// loader
$(window).on('load', function() {
    var $loader = $('.loader');
    
    $loader.addClass('loader--hidden');
    
    $loader.on('transitionend', function() {
      $loader.remove();
    });
});


// summernote(texteditor)
document.addEventListener('DOMContentLoaded', function() {
    var summernoteEditor = document.getElementById('summernote-editor');
    if (summernoteEditor) {
        // Initialize Summernote editor
        $(summernoteEditor).summernote();
    }

    // $(document).ready(function() {
    //     $('#summernote-editor').summernote();
    // });

});

// Copy Button Code Snippet
// Add copy functionality to all copy buttons
document.querySelectorAll('.copy-button').forEach(button => {
    button.addEventListener('click', () => {
        // Find the <code> element within the same snippet
        const code = button.nextElementSibling.querySelector('code').innerText;
        // Create a temporary textarea to copy the code
        const textarea = document.createElement('textarea');
        textarea.value = code;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);

        // Change button text briefly to confirm copy
        button.innerText = 'Copied!';
        setTimeout(() => button.innerText = 'Copy Code', 2000);
    });
});

// Magnifier zoom
let imageZoom = document.getElementById('imageZoom');
imageZoom.addEventListener('mousemove', (event) => {
    imageZoom.style.setProperty('--display', 'block');
    let pointer = {
        x:  (event.offsetX * 100) / imageZoom.offsetWidth,
        y:  (event.offsetY * 100) / imageZoom.offsetHeight
    }
    imageZoom.style.setProperty('--zoom-x', pointer.x + '%');
    imageZoom.style.setProperty('--zoom-y', pointer.y + '%');
})
imageZoom.addEventListener('mouseleave', () => {
    imageZoom.style.setProperty('--display', 'none');
})