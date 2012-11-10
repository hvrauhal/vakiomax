describe('Make veikkaus url should create an', function(){
             var prefix='https://www.veikkaus.fi/mobile?area=wagering&game=sport&op=checkGame&t=1&type=normal'
             it('empty row', function(){
                    assert.equal(vakiomax.makeVeikkausUrl([]),prefix);
                })
describe('single row with', function(){
             
             it('10 games', function(){
                    assert.equal(vakiomax.makeVeikkausUrl(['1X21X21X21']), prefix + '&I11=1&I12=X&I13=2&I14=1&I15=X&I16=2&I17=1&I18=X&I19=2&I1a=1');
                })
             it('13 games', function(){
                    assert.equal(vakiomax.makeVeikkausUrl(['1X21X21X21X21']), prefix + '&I11=1&I12=X&I13=2&I14=1&I15=X&I16=2&I17=1&I18=X&I19=2&I1a=1&I1b=X&I1c=2&I1d=1');
                })
         })
             describe('two rows with', function() {
                          it('13 games', function(){
                                 assert.equal(vakiomax.makeVeikkausUrl(['1111111111111','2222222222222']), prefix + '&I11=1&I12=1&I13=1&I14=1&I15=1&I16=1&I17=1&I18=1&I19=1&I1a=1&I1b=1&I1c=1&I1d=1&I21=2&I22=2&I23=2&I24=2&I25=2&I26=2&I27=2&I28=2&I29=2&I2a=2&I2b=2&I2c=2&I2d=2');
                             })
                      })
             describe('11 rows with', function() {
                          it('13 games', function(){
                                 assert.equal(vakiomax.makeVeikkausUrl(['1111111111111'
                                                               ,'2222222222222'
                                                               ,'XXXXXXXXXXXXX'
                                                               ,'1111111111111'
                                                               ,'2222222222222'
                                                               ,'XXXXXXXXXXXXX'
                                                               ,'1111111111111'
                                                               ,'2222222222222'
                                                               ,'XXXXXXXXXXXXX'
                                                               ,'1111111111111'
                                                               ,'2222222222222']), prefix + '&I11=1&I12=1&I13=1&I14=1&I15=1&I16=1&I17=1&I18=1&I19=1&I1a=1&I1b=1&I1c=1&I1d=1&I21=2&I22=2&I23=2&I24=2&I25=2&I26=2&I27=2&I28=2&I29=2&I2a=2&I2b=2&I2c=2&I2d=2&I31=X&I32=X&I33=X&I34=X&I35=X&I36=X&I37=X&I38=X&I39=X&I3a=X&I3b=X&I3c=X&I3d=X&I41=1&I42=1&I43=1&I44=1&I45=1&I46=1&I47=1&I48=1&I49=1&I4a=1&I4b=1&I4c=1&I4d=1&I51=2&I52=2&I53=2&I54=2&I55=2&I56=2&I57=2&I58=2&I59=2&I5a=2&I5b=2&I5c=2&I5d=2&I61=X&I62=X&I63=X&I64=X&I65=X&I66=X&I67=X&I68=X&I69=X&I6a=X&I6b=X&I6c=X&I6d=X&I71=1&I72=1&I73=1&I74=1&I75=1&I76=1&I77=1&I78=1&I79=1&I7a=1&I7b=1&I7c=1&I7d=1&I81=2&I82=2&I83=2&I84=2&I85=2&I86=2&I87=2&I88=2&I89=2&I8a=2&I8b=2&I8c=2&I8d=2&I91=X&I92=X&I93=X&I94=X&I95=X&I96=X&I97=X&I98=X&I99=X&I9a=X&I9b=X&I9c=X&I9d=X&Ia1=1&Ia2=1&Ia3=1&Ia4=1&Ia5=1&Ia6=1&Ia7=1&Ia8=1&Ia9=1&Iaa=1&Iab=1&Iac=1&Iad=1&Ib1=2&Ib2=2&Ib3=2&Ib4=2&Ib5=2&Ib6=2&Ib7=2&Ib8=2&Ib9=2&Iba=2&Ibb=2&Ibc=2&Ibd=2');
                             })
                      })

         })


