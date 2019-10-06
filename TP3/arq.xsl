<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    
    <xsl:output method="xhtml" indent="yes" encoding="UTF-8"/>
    
    <xsl:template match="/">
        <xsl:result-document href="website/index.html">
            <html>
                <head>
                    <title>Arqueossítios Nordeste de Portugal</title>
                    <meta charset="UTF8"></meta>
                    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
                </head>
                <body>
                    <h1>Arqueossítios Nordeste de Portugal</h1>
                    <h3>Indice dos arqueossitios</h3>
                    <ol class="w3-ul w3-card-4">
                        <xsl:apply-templates mode="indice"/>
                    </ol>
                </body>
            </html>
        </xsl:result-document>
        <xsl:apply-templates/>
    </xsl:template>
    
    <xsl:template match="ARQELEM" mode="indice">
        <li>
            <a name="{generate-id()}"/>
            <a href="arqueos-{generate-id()}.html"><xsl:value-of select="IDENTI"/></a>
        </li>
    </xsl:template>
    
    <xsl:template match="ARQELEM">
        <xsl:result-document href="website/arqueos-{generate-id()}.html"> . 
            <html>
                <head>
                    <title>Arqueossítio Nordeste de Portugal - Arqueossítio </title>
                    <meta charset="UTF8"></meta>
                    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
                </head>
                <body>
                    <table class="w3-table-all w3-hoverable">
                        <tr>
                            <th>Descrição</th><td><xsl:value-of select="DESCRI/LIGA"/></td>                
                        </tr>
                        <tr>
                            <th>Lugar</th><td><xsl:value-of select="LUGAR"/></td>
                        </tr>
                        <tr>
                            <th>Concelho</th><td><xsl:value-of select="CONCEL"/></td>
                        </tr>
                        <tr>
                            <th>Freguesia</th><td><xsl:value-of select="FREGUE"/></td>
                        </tr>
                        <tr>
                            <th>Longitude</th><td><xsl:value-of select="LONGIT"/></td>
                        </tr>
                        <tr>
                            <th>Latitude</th><td><xsl:value-of select="LATITU"/></td>
                        </tr>
                        <tr>
                            <th>Altitude</th><td><xsl:value-of select="ALTITU"/></td>
                        </tr>
                        <tr>
                            <th>Quadro</th><td><xsl:value-of select="QUADRO"/></td>
                        </tr>
                        <tr>
                            <th>Depositado</th><td><xsl:value-of select="DEPOSI"/></td>
                        </tr>
                    </table>
                    <hr/>
                    Data - <xsl:value-of select="DATA"/>
                    <hr/>
                    <address>
                        <a href="index.html#{generate-id()}">Voltar à página principal.</a>
                    </address>
                </body>
            </html>
            </xsl:result-document>
    </xsl:template>
    
</xsl:stylesheet>
