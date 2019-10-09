<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    
    version="1.0">
    
    <xsl:output method="html" indent="yes" encoding="UTF-8"/>
    
    <xsl:template match="ARQELEM">
        <head>
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/> 
        </head>
        <body>
        <h1><xsl:value-of select="IDENTI"/></h1>
        <h2>Arqueossítio do concelho de <xsl:value-of select="CONCEL"/></h2>
            <table width="50%" class="w3-table w3-bordered">
            <xsl:apply-templates mode="tabela"></xsl:apply-templates>
        </table>
        <xsl:apply-templates/>
        <h2> Termos</h2>
        <ol>
               <xsl:apply-templates mode="termos" select="//LIGA"></xsl:apply-templates>
        </ol>
        </body>
    </xsl:template>
    
    <xsl:template match="DESCRI" mode="tabela">
        <tr>
            <th>DESCRIÇÃO</th> 
            <xsl:apply-templates> </xsl:apply-templates>
        </tr>
    </xsl:template>
    
    <xsl:template match="LUGAR" mode="tabela">
        <tr>
            <th>LUGAR</th><td><xsl:value-of select="."/></td> 
        </tr>
    </xsl:template>
    
    <xsl:template match="FREGUE" mode="tabela">
        <tr>
            <th>FREGUESIA</th><td><xsl:value-of select="."/></td> 
        </tr>
    </xsl:template>
    
    <xsl:template match="CODADM" mode="tabela">
        <tr>
            <th>CODADM</th><td><xsl:value-of select="."/></td> 
        </tr>
    </xsl:template>
    
    <xsl:template match="CONCEL" mode="tabela">
        <tr>
            <th>CONCELHO</th><td><xsl:value-of select="."/></td> 
        </tr>
    </xsl:template>
    
    <xsl:template match="IDENTI" mode="tabela">
        <tr>
            <th>IDENTIFICAÇÃO</th><td><xsl:value-of select="."/></td> 
        </tr>
    </xsl:template>
    
    <xsl:template match="LATITU" mode="tabela">
        <tr>
            <th>LATITUDE</th><td><xsl:value-of select="."/></td> 
        </tr>
    </xsl:template>
    
    <xsl:template match="LONGIT" mode="tabela">
        <tr>
            <th>LONGITUDE</th><td><xsl:value-of select="."/></td> 
        </tr>
    </xsl:template>
    
    <xsl:template match="ALTITU" mode="tabela">
        <tr>
            <th>ALTITUDE</th> <td><xsl:value-of select="."/></td> 
        </tr>
    </xsl:template>
    
    <xsl:template match="ACESSO" >
        <h2> ACESSO </h2>
        <p>
            <xsl:apply-templates> </xsl:apply-templates>
        </p>
    </xsl:template>
    
    <xsl:template match="QUADRO">
        <h2> QUADRO</h2>
        <p>
            <xsl:apply-templates></xsl:apply-templates>
        </p>
    </xsl:template>
    
    <xsl:template match="DESARQ">
        <h2> DESARQ</h2>
        <p>
            <xsl:apply-templates></xsl:apply-templates>
        </p>
    </xsl:template>
    
    <xsl:template match="INTERP">
        <h2> INTERPRETAÇÃO</h2>
        <p>
            <xsl:apply-templates></xsl:apply-templates>
        </p>
    </xsl:template>
    
    <xsl:template match="DEPOSI">
        <h2> DEPOSITO</h2>
        <p>
            <xsl:value-of select="."/>
        </p>
    </xsl:template>
    
    <xsl:template match="BIBLIO">
        <p>
            <xsl:value-of select="."/>
        </p>
    </xsl:template>
    
    <xsl:template match="AUTOR">
        
        <p>
            AUTOR : <xsl:value-of select="."/>
        </p>
    </xsl:template>
    
    <xsl:template match="DATA">
        
        <p>
          DATA:  <xsl:value-of select="."/>
        </p>
    </xsl:template>
    
    <xsl:template match="LIGA">
        <xsl:value-of select="."/>
    </xsl:template>
    
    <xsl:template match="LIGA" mode="termos">
        <li> <xsl:value-of select="./@TERMO"/> </li>
            
    </xsl:template>
    
    <xsl:template match="*" mode="tabela" priority="-1">
        
    </xsl:template>
    
    <xsl:template match="*"  priority="-1">
        
    </xsl:template>
    
    <xsl:template match="*" mode="termos" priority="-1">
        
    </xsl:template>
    
</xsl:stylesheet>
